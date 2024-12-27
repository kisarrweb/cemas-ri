'use client';
import { useRef } from 'react';
import addChapitre from '@/app/actions/addChapitre';
import { toast } from 'react-toastify';
import Image from 'next/image'

const Page = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addChapitre(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Chapitre ajouté avec succès');
      formRef.current?.reset();
    }
  };

  return (
    <div className='addChapitre'>
      <h3>Ajouter un chapitre</h3>
      <form ref={formRef} action={clientAction}>
        <div className='form-control'>
          <label htmlFor='title'>TITRE</label>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='Enter title...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='content'>Contenu</label>
          <input
            type='text'
            name='content'
            id='content'            
          />

        </div>
       
        <button className='btn'><span><Image src="/img/icons/icon-add.svg" alt='del' width="40" height="40" /></span><span>ADD</span></button>
      </form>
    </div>
  );
};

export default Page;
