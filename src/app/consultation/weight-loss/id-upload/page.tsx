'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import { ChevronLeft, ChevronRight, Upload, X, Camera } from 'lucide-react';
import Image from 'next/image';
import { API_ENDPOINTS } from '@/config/api';
import axios from 'axios';

export default function IDUploadPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [idType, setIdType] = useState<'id-card' | 'passport'>('id-card');
  const [isUploading, setIsUploading] = useState(false);
  const [returnUrl, setReturnUrl] = useState<string | null>(null);
  const [questionId, setQuestionId] = useState<string | null>(null);

  // Get return URL and question ID from query params
  useEffect(() => {
    const url = searchParams.get('returnUrl');
    const qId = searchParams.get('questionId');
    if (url) setReturnUrl(decodeURIComponent(url));
    if (qId) setQuestionId(qId);
  }, [searchParams]);

  // Restore uploaded image from sessionStorage on mount
  useEffect(() => {
    const savedIdUpload = sessionStorage.getItem('idUpload');
    if (savedIdUpload) {
      try {
        const uploadData = JSON.parse(savedIdUpload);
        // Restore preview URL if available
        if (uploadData.previewUrl) {
          setPreviewUrl(uploadData.previewUrl);
        }
        // Restore ID type if available
        if (uploadData.idType) {
          setIdType(uploadData.idType);
        }
        // Note: We can't restore the File object, but we can show the preview
        // The file name is already in uploadData.name
      } catch (error) {
        console.error('Error restoring ID upload data:', error);
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

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    // Remove from sessionStorage when file is removed
    sessionStorage.removeItem('idUpload');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleContinue = async () => {
    // Check if we have either a selected file or a restored preview URL
    if (!selectedFile && !previewUrl) {
      alert('Please upload an ID card or passport image');
      return;
    }

    if (previewUrl && !selectedFile) {
      // Navigate to selfie upload page if next question exists, otherwise use returnUrl
      const nextQuestionId = searchParams.get('nextQuestionId');
      if (nextQuestionId && nextQuestionId.trim() !== '') {
        // Navigate directly to selfie upload page with the next question info
        // Also pass the current questionId (ID upload node) so we can navigate back to it
        const selfieReturnUrl = returnUrl || `/consultation/weight-loss?questionId=${nextQuestionId}&returnFrom=selfie-upload`;
        router.push(`/consultation/weight-loss/selfie-upload?returnUrl=${encodeURIComponent(selfieReturnUrl)}&questionId=${nextQuestionId}&nextQuestionId=&idUploadQuestionId=${questionId || ''}`);
      } else if (returnUrl) {
        router.push(returnUrl);
      } else {
        // Fallback: try to find selfie upload node from sessionStorage or navigate to consultation
        router.push('/consultation/weight-loss');
      }
    }

    if (selectedFile) {
      setIsUploading(true);
      // Simulate upload (in real app, upload to server)
      try {
        const userInfoStr = sessionStorage.getItem('loginInfo');
        const userInfo = userInfoStr ? JSON.parse(userInfoStr) : null;
        const formData = new FormData();
        formData.append('actionType', "0");
        if (selectedFile) formData.append('image', selectedFile);

        try {
          const res = await axios.post(API_ENDPOINTS.PATIENTS.UPLOAD_PHOTO(userInfo.patientId), formData);
          if (res) {
            // Save to sessionStorage immediately when file is selected
            const fileData = {
              idType: idType,
              previewUrl: previewUrl,
            };
            sessionStorage.setItem('idUpload', JSON.stringify(fileData));
          }
        } catch (error) {
          console.log(error)
        }

        // Mark the question as answered
        if (questionId) {
          const progress = sessionStorage.getItem('weightLossProgress');
          if (progress) {
            const parsed = JSON.parse(progress);
            parsed.answers = parsed.answers || {};
            parsed.answers[questionId] = 'Pass';
            sessionStorage.setItem('weightLossProgress', JSON.stringify(parsed));
          }
        }

        // Simulate upload delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Navigate to selfie upload page if next question exists, otherwise use returnUrl
        const nextQuestionId = searchParams.get('nextQuestionId');
        if (nextQuestionId && nextQuestionId.trim() !== '') {
          // Navigate directly to selfie upload page with the next question info
          // Also pass the current questionId (ID upload node) so we can navigate back to it
          const selfieReturnUrl = returnUrl || `/consultation/weight-loss?questionId=${nextQuestionId}&returnFrom=selfie-upload`;
          router.push(`/consultation/weight-loss/selfie-upload?returnUrl=${encodeURIComponent(selfieReturnUrl)}&questionId=${nextQuestionId}&nextQuestionId=&idUploadQuestionId=${questionId || ''}`);
        } else if (returnUrl) {
          router.push(returnUrl);
        } else {
          // Fallback: try to find selfie upload node from sessionStorage or navigate to consultation
          router.push('/consultation/weight-loss');
        }
      } catch (error) {
        console.error('Upload error:', error);
        alert('Failed to upload image. Please try again.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleBack = () => {
    if (returnUrl) {
      router.push(returnUrl);
    } else {
      router.back();
    }
  };

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
                Upload ID Card or Passport
              </h1>
              <p className="text-gray-600 text-sm">
                Please upload a clear image of your ID card or passport for verification
              </p>
            </div>

            {/* Form Fields */}
            <div className="px-6 py-8 space-y-6">
              {/* ID Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Document Type
                </label>
                <div className="flex gap-4">
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="idType"
                      value="id-card"
                      checked={idType === 'id-card'}
                      onChange={(e) => {
                        const newIdType = e.target.value as 'id-card' | 'passport';
                        setIdType(newIdType);
                      }}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg text-center transition-colors ${idType === 'id-card'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                      }`}>
                      <span className="text-sm font-medium text-gray-700">ID Card</span>
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="idType"
                      value="passport"
                      checked={idType === 'passport'}
                      onChange={(e) => {
                        const newIdType = e.target.value as 'id-card' | 'passport';
                        setIdType(newIdType);
                      }}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg text-center transition-colors ${idType === 'passport'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                      }`}>
                      <span className="text-sm font-medium text-gray-700">Passport</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* File Upload Area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Upload Image
                </label>
                {!previewUrl ? (
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
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="relative border-2 border-gray-300 rounded-lg p-4">
                    <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={previewUrl}
                        alt="ID preview"
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
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600">
                        {selectedFile?.name || (previewUrl ? 'ID image uploaded' : '')}
                      </p>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="mt-2 text-sm text-blue-600 hover:text-blue-700 underline"
                      >
                        Change image
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">
                  Upload Guidelines:
                </h3>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Ensure the image is clear and all text is readable</li>
                  <li>Make sure all four corners of the document are visible</li>
                  <li>Use good lighting and avoid shadows or glare</li>
                  <li>The document should be in focus and not blurry</li>
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
                  disabled={(!selectedFile && !previewUrl) || isUploading}
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

