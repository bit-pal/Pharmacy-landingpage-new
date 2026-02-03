'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import { ChevronLeft, ChevronRight, Upload, X, Camera } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';
import { toast } from 'react-toastify';

export default function SelfieUploadPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [returnUrl, setReturnUrl] = useState<string | null>(null);
  const [questionId, setQuestionId] = useState<string | null>(null);
  const [idUploadQuestionId, setIdUploadQuestionId] = useState<string | null>(null);

  // Get return URL and question ID from query params
  useEffect(() => {
    const url = searchParams.get('returnUrl');
    const qId = searchParams.get('questionId');
    const idUploadQId = searchParams.get('idUploadQuestionId'); // ID upload node question ID
    if (url) setReturnUrl(decodeURIComponent(url));
    if (qId) setQuestionId(qId);
    if (idUploadQId) setIdUploadQuestionId(idUploadQId);
  }, [searchParams]);

  // Restore uploaded selfie from sessionStorage on mount
  useEffect(() => {
    const savedSelfieUpload = sessionStorage.getItem('selfieUpload');
    if (savedSelfieUpload) {
      try {
        const uploadData = JSON.parse(savedSelfieUpload);
        // Restore preview URL if available
        if (uploadData.previewUrl) {
          setPreviewUrl(uploadData.previewUrl);
        }
        // Note: We can't restore the File object, but we can show the preview
        // The file name is already in uploadData.name
      } catch (error) {
        console.error('Error restoring selfie upload data:', error);
      }
    }
  }, []);

  const benefits = [
    { icon: '✓', text: 'Free Tracked Delivery' },
    { icon: '£', text: 'Lowest Price Guarantee' },
    { icon: '🇬🇧', text: 'We are based in the UK' }
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const preview = reader.result as string;
        setPreviewUrl(preview);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' }
      });
      setStream(mediaStream);
      setIsCameraOpen(true);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please upload an image instead.');
    }
  };

  const handleCloseCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraOpen(false);
  };

  const handleCapturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const preview = canvas.toDataURL();
        canvas.toBlob((blob) => {
          if (blob) {
            const timestamp = new Date().getTime();
            const file = new File([blob], `selfie-${timestamp}.jpg`, { type: 'image/jpeg' });
            setSelectedFile(file);
            setPreviewUrl(preview);
            handleCloseCamera();
          }
        }, 'image/jpeg', 0.9);
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    // Remove from sessionStorage when file is removed
    sessionStorage.removeItem('selfieUpload');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleContinue = async () => {
    // Check if we have either a selected file or a restored preview URL
    if (!selectedFile && !previewUrl) {
      alert('Please upload a selfie image');
      return;
    }

    setIsUploading(true);

    // Simulate upload (in real app, upload to server)
    try {
      const userInfoStr = sessionStorage.getItem('loginInfo');
      const userInfo = userInfoStr ? JSON.parse(userInfoStr) : null;
      const formData = new FormData();
      formData.append('actionType', "1");
      if (selectedFile) formData.append('image', selectedFile);

      try {
        const res = await axios.post(API_ENDPOINTS.PATIENTS.UPLOAD_PHOTO(userInfo.patientId), formData);
        if (res) {
          // Save to sessionStorage immediately when file is selected
          const fileData = {
            previewUrl: previewUrl,
          };
          sessionStorage.setItem('selfieUpload', JSON.stringify(fileData));
        }
      } catch (error) {
        console.log(error)
      }

      // Mark the question as answered (selfie upload doesn't have options, so we just mark it complete)
      if (questionId) {
        const progress = sessionStorage.getItem('weightLossProgress');
        if (progress) {
          const parsed = JSON.parse(progress);
          parsed.answers = parsed.answers || {};
          parsed.answers[questionId] = 'Complete';
          sessionStorage.setItem('weightLossProgress', JSON.stringify(parsed));
        }
      }

      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const progress = sessionStorage.getItem('weightLossProgress');
      const loginInfo = sessionStorage.getItem('loginInfo');
      if (progress && loginInfo) {
        const progressParsed = JSON.parse(progress);
        const loginInfoParsed = JSON.parse(loginInfo);
        const questionnaireID = "ef9ae019-91bd-4c2f-85a3-da31776de061";
        const data = {
          patientId: loginInfoParsed.patientId,
          questionnaireId: questionnaireID,
          data: progressParsed.answers,
        }
        try {
          const res = await axios.post(API_ENDPOINTS.PATIENT_QAS.CREATE, data);
          if (res) {
            // Navigate back to flow or to success page
            if (returnUrl) {
              // remove sessions
              sessionStorage.removeItem('weightLossProgress');
              sessionStorage.removeItem('consultationUserInfo');
              sessionStorage.removeItem('checkoutProduct');
              sessionStorage.removeItem('idUpload');
              sessionStorage.removeItem('selfieUpload');
              router.push('/');
            } else {
              // Fallback: check if there's a next question
              const nextQuestionId = searchParams.get('nextQuestionId');
              if (nextQuestionId) {
                router.push(`/consultation/weight-loss?questionId=${nextQuestionId}&returnFrom=selfie-upload`);
              } else {
                // No next question, go to success page
                router.push('/consultation/success');
              }
            }
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        toast.error('No progress or login info found');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleBack = () => {
    // Navigate back to ID upload page if we have the ID upload question ID
    if (idUploadQuestionId) {
      // Reconstruct the ID upload page URL with the same parameters it had
      const idUploadReturnUrl = returnUrl || `/consultation/weight-loss?questionId=${questionId}&returnFrom=selfie-upload`;
      router.push(`/consultation/weight-loss/id-upload?returnUrl=${encodeURIComponent(idUploadReturnUrl)}&questionId=${idUploadQuestionId}&nextQuestionId=${questionId || ''}`);
    } else if (returnUrl) {
      router.push(returnUrl);
    } else {
      router.back();
    }
  };

  // Cleanup camera stream on unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Benefits Bar */}
      <div className="bg-black text-white py-4">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Free Tracked Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">£</span>
              <span>Lowest Price Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">🇬🇧</span>
              <span>We are based in the UK</span>
            </div>
          </div>

          {/* Mobile: Show first benefit */}
          <div className="md:hidden flex justify-center items-center text-sm">
            <span className="text-green-400">{benefits[0].icon}</span>
            <span className="ml-2">{benefits[0].text}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            {/* Step 1 - Completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Medical Questions</span>
            </div>

            {/* Line 1 - Completed */}
            <div className="flex-1 h-1 bg-green-500 mx-2 mb-6"></div>

            {/* Step 2 - Completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Treatment & Prices</span>
            </div>

            {/* Line 2 - Completed */}
            <div className="flex-1 h-1 bg-green-500 mx-2 mb-6"></div>

            {/* Step 3 - Completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Form Header */}
            <div className="text-center py-8 px-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Upload Selfie Photo
              </h1>
              <p className="text-gray-600 text-sm">
                Please take a clear selfie photo for identity verification
              </p>
            </div>

            {/* Form Fields */}
            <div className="px-6 py-8 space-y-6">
              {/* Camera or File Upload */}
              {!isCameraOpen ? (
                <>
                  {!previewUrl ? (
                    <div className="space-y-4">
                      {/* Camera Button */}
                      <button
                        onClick={handleOpenCamera}
                        className="w-full border-2 border-blue-600 text-blue-600 rounded-lg p-6 hover:bg-blue-50 transition-colors flex items-center justify-center space-x-3"
                      >
                        <Camera className="w-6 h-6" />
                        <span className="font-medium">Take Photo with Camera</span>
                      </button>

                      <div className="flex items-center">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">OR</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                      </div>

                      {/* File Upload */}
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-700 font-medium mb-2">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-gray-500 text-sm">
                          PNG, JPG, JPEG up to 10MB
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          capture="user"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative border-2 border-gray-300 rounded-lg p-4">
                      <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={previewUrl}
                          alt="Selfie preview"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <button
                        onClick={handleRemoveFile}
                        className="absolute top-6 right-6 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <div className="mt-4 text-center space-y-2">
                        <p className="text-sm text-gray-600">
                          {selectedFile?.name || (previewUrl ? 'Selfie photo uploaded' : 'Selfie photo')}
                        </p>
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="text-sm text-blue-600 hover:text-blue-700 underline"
                          >
                            Change image
                          </button>
                          <span className="text-gray-400">|</span>
                          <button
                            onClick={handleOpenCamera}
                            className="text-sm text-blue-600 hover:text-blue-700 underline"
                          >
                            Retake photo
                          </button>
                        </div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          capture="user"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="relative border-2 border-gray-300 rounded-lg p-4">
                  <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 flex gap-3 justify-center">
                    <button
                      onClick={handleCloseCamera}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCapturePhoto}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <Camera className="w-5 h-5" />
                      <span>Capture Photo</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Hidden canvas for capturing photo */}
              <canvas ref={canvasRef} className="hidden" />

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">
                  Selfie Guidelines:
                </h3>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Face the camera directly with good lighting</li>
                  <li>Remove glasses, hat, or anything covering your face</li>
                  <li>Ensure your full face is visible and in focus</li>
                  <li>Use a neutral expression and look directly at the camera</li>
                  <li>Make sure there are no shadows on your face</li>
                </ul>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={handleBack}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors flex items-center space-x-1"
                >
                  <ChevronLeft size={16} />
                  <span>Back</span>
                </button>

                <button
                  onClick={handleContinue}
                  disabled={(!selectedFile && !previewUrl) || isUploading || isCameraOpen}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                >
                  <span>{isUploading ? 'Uploading...' : 'Continue'}</span>
                  {!isUploading && <ChevronRight size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white py-8 text-center mt-auto">
        <p className="text-sm text-gray-600">
          Copyright MediTrue 2025
        </p>
      </div>
    </main>
  );
}

