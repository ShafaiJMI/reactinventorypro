import React, { useState, useEffect } from 'react';
import Link from "react-router-dom";
import axios from 'axios';
import ImageUpload from '../../components/ImageUpload';

function AddProduct(){
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        category: '',
        price: '',
        colour: '',
        fabric: '',
        description: '',
        tags: '',
        sale: '',
        featured: false,
        stock: 1,
      });

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({
          ...formData,
          [name]: val,
        });
      };

      const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setImages([...images, ...selectedFiles]);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://192.168.1.4:8000/api/products/add', formData, images);
          console.log('Product added successfully:', response.data);
          // Reset form after successful submission
          setFormData({
            title: '',
            slug: '',
            category: '',
            price: '',
            colour: '',
            fabric: '',
            description: '',
            tags: '',
            sale: '',
            featured: false,
            stock: 1,
          });
        } catch (error) {
          console.error('Error adding product:', error);
        }
      };
    return(
        <section className='p-4 dark:bg-gray-800'>
            <h4 className='text-xl py-4 font-bold'>Add Product</h4>
            <div className='flex gap-4'>
            <div className='w-1/2 border-2 bg-white border-solid rounded-xl shadow-lg'>
            <form className="p-4 flex flex-col" onSubmit={handleSubmit}>
      <div className='p-2'>
        <label for="title" className="block text-md font-bold leading-6 text-gray-900">Product name*</label>
        <input id="title" className="block w-full mt-1 rounded-lg border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" type="text" name="title" value={formData.title} placeholder="Enter product name" onChange={handleChange} />
      </div>
      <div className='grid grid-cols-2'>
      <div className='p-2'>
        <label for="category" className="block text-md font-bold leading-6 text-gray-900">Category</label>
        <input id="category" className="block w-full mt-1 rounded-lg border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" type="text" name="category" value={formData.category} placeholder="Choose category" onChange={handleChange} />
      </div>
      <div className='p-2'>
        <label for="price" className="block text-md font-bold leading-6 text-gray-900">Price*</label>
        <input id="price" className="block w-full mt-1 rounded-lg border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" type="text" name="price" value={formData.price} placeholder="Price" onChange={handleChange} />
      </div>
      <div className='p-2'>
        <label for="colour" className="block text-md font-bold leading-6 text-gray-900">Colour</label>
        <input id="colour" className="block w-full mt-1 rounded-lg border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" type="text" name="colour" value={formData.colour} placeholder="Select colour" onChange={handleChange} />
      </div>
      <div className='p-2'>
        <label for="fabrics" className="block text-md font-bold leading-6 text-gray-900">Fabric</label>
        <input id="fabrics" className="block w-full mt-1 rounded-lg border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" type="text" name="fabric" value={formData.fabric} placeholder="Select fabric" onChange={handleChange} />
      </div>
      <div className='p-2'>
        <label for="sale" className="block text-md font-bold leading-6 text-gray-900">Sale</label>
        <input id="sale" className="block w-full mt-1 rounded-lg border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" type="text" name="sale" value={formData.sale} placeholder="Enter sale discount" onChange={handleChange} />
      </div>
      <div className='p-2'>
        <label for="stock" className="block text-md font-bold leading-6 text-gray-900">Stock</label>
        <input id="stock" className="block w-full mt-1 rounded-lg border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" type="text" name="stock" value={formData.stock} placeholder="Select quantiy" onChange={handleChange} />
      </div>
      </div>
      <div className='p-2'>
        <label for="tags" className="block text-md font-bold leading-6 text-gray-900">Tags</label>
        <input id="tags" className="block w-full mt-1 rounded-lg border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" type="text" name="tags" value={formData.tags} placeholder="Enter SEO keywords" onChange={handleChange} />
      </div>
      <div className='p-2'>
        <label for="description" className="block text-md font-bold leading-6 text-gray-900">Description</label>
        <textarea id="description" className="block w-full mt-1 rounded-lg border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" type="text" name="description" value={formData.description} placeholder="Description" onChange={handleChange} />
      </div>
      <div className='p-2'>
      <label className="block text-sm font-medium leading-6 text-gray-900">
          Featured
          <input className='mx-2' type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} />
        </label>
      </div>
      <button className="p-2 bg-indigo-700 text-white" type="submit">Add Product</button>
    </form>
    </div>

    <div className='w-1/2 bg-white border-2 border-solid rounded-xl shadow-lg'>
        <div className='p-4'>
        <div className="grid grid-cols-3 gap-2">
    {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={URL.createObjectURL(image)}
            alt={`Uploaded Image ${index + 1}`}
            className="w-46 h-56 border-2 border-solid rounded-lg object-cover"
          />
        </div>
      ))}
    <div className="w-46 h-56 rounded-lg border-2 border-solid bg-gray-200 relative">
      <input type="file" className="absolute w-full opacity-0 h-full inset-0 z-10" accept="image/*" multiple onChange={handleFileChange}/>
      <div className="absolute inset-0 flex justify-center items-center text-gray-500">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
      </div>
    </div>
    </div>
        </div>
    </div>
    </div>
        </section>
    );
}

export default AddProduct;