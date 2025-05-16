'use client';

import React, { useState } from 'react';
import { useCustomization } from '@/hooks/useCustomization';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

/**
 * Image uploader component for product customization
 */
const ImageUploader: React.FC<{
  onImageUploaded: (imageUrl: string) => void;
}> = ({ onImageUploaded }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setError(null);
    
    if (!file) {
      setSelectedFile(null);
      setPreviewUrl(null);
      return;
    }
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file (JPEG, PNG, etc.)');
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }
    
    setSelectedFile(file);
    
    // Create preview URL
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Handle upload
  const handleUpload = async () => {
    if (!selectedFile) return;
    
    try {
      setUploading(true);
      setError(null);
      
      // In a real implementation, this would upload the file to a server
      // For the prototype, we'll just simulate success and use the preview URL
      setTimeout(() => {
        if (previewUrl) {
          onImageUploaded(previewUrl);
        }
        setUploading(false);
      }, 1500);
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload image. Please try again.');
      setUploading(false);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Upload Your Image</h3>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select an image to customize your product:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={uploading}
        />
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      </div>
      
      {previewUrl && (
        <div className="mb-4">
          <p className="text-gray-700 mb-2">Preview:</p>
          <div className="w-full max-h-48 overflow-hidden rounded border border-gray-300">
            <img src={previewUrl} alt="Preview" className="w-full h-auto" />
          </div>
        </div>
      )}
      
      <Button
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
        className="w-full"
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </Button>
    </Card>
  );
};

export default ImageUploader;
