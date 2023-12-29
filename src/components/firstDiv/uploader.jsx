import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoSlice } from '../../redux/firstDivSlices/uploadSlice';
import { LiaUploadSolid } from "react-icons/lia";

const Uploader = () => {

  const dispatch = useDispatch()
  const logo = useSelector((state) => state.logo)
  console.log('yüklenen resim : ',logo)

    const handleFileChange = (event) => {
        const fileInput = event.target;
        const file = fileInput.files[0];
      
        if (file) {
          const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
          const maxSize = 5 * 1024 * 1024; // 5 MB
      
          if (allowedFileTypes.includes(file.type) && file.size <= maxSize) {
            // Dosya türü ve boyutu uygun, işlemleri burada gerçekleştirin
            dispatch(logoSlice(event.target.value))
            
          } else {
            // Dosya türü veya boyutu uygun değil
            alert('Lütfen geçerli bir .jpg, .jpeg veya .png dosyası (5 MB\'dan küçük) seçin.');
            fileInput.value = ''; // Input'u temizle
          }
        }
        
      };
    

    return (
      <div className='w-[376.99px] h-[134.96px] flex justify-center'>
        <div className='w-[353.01px] h-[110.96px] mb-[24px]'>
                      <label htmlFor="purchaseOrder">Logo</label>
                      <div className='w-[353.01px] h-[80.08px]'>
                          <div className='w-[350.61px] h-[77.68px] border-black border-[1px] mt-[10px] cursor-pointer hover:bg-[#16330014]'
                          onClick={() => document.getElementById('np-upload-button').click()}>
                            <input 
                              id='np-upload-button' 
                              type='file' 
                              style={{ display: 'none' }} 
                              onChange={handleFileChange} 
                              accept='.jpg, .jpeg, .png' // Sadece belirli dosya türlerini kabul et
                            /> 
                            <div className='flex justify-center'>
                              <span><LiaUploadSolid /></span>
                              <div className='flex flex-col h-[30px] ml-[10px]'> 
                                <div className='font-bold'>Upload file</div>
                                <div>JPG, JPEG, PNG, less than 5mb</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                      
    )
}

export default Uploader