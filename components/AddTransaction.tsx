'use client';
import { useRef } from 'react';
import addTransaction from '@/app/actions/addTransaction';
import { toast } from 'react-toastify';
import Image from 'next/image'

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Tâche ajoutée');
      formRef.current?.reset();
    }
  };

  return (
    <>
      <h3>Ajouter une tâche</h3>
      <form ref={formRef} action={clientAction}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            name='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='done'>
            Achevé?
          </label>
          <input
            type='checkbox'
            name='done'
            id='done'
            
          />
        </div>
        <button className='btn'><span><Image src="/img/icons/icon-add.svg" alt='del' width="40" height="40" /></span><span>ADD</span></button>
      </form>
    </>
  );
};

export default AddTransaction;
