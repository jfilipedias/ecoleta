import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {
        selectedFileUrl ?
          <img src={selectedFileUrl} alt="Imagem do ponto"/> :
          (
            isDragActive ?
            <p>
            <FiUpload />
              Solte os arquivos aqui.
            </p> :
            <p>        
            <FiUpload />
              Arraste e solte alguma imagem aqui, ou click para selecionar o arquivo.
            </p>
          )
      }
    </div>
  )
}

export default Dropzone;