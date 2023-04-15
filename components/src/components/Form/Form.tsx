import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import styles from './Form.module.scss';

import { formSlice } from '../../store/redusers/FormSlice';

import { CardFormState, CardFormSumbit } from '../../Types/CardFormProps';

type FormValues = CardFormState;

export const Form = ({ setStateCard }: { setStateCard: (data: CardFormSumbit) => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  const dispatch = useDispatch();
  const { submit } = formSlice.actions;

  const onSubmit: SubmitHandler<FormValues> = (formData: CardFormState) => {
    const inputPhoto = structuredClone(formData.photo).item(0);
    const photoFile = inputPhoto && URL.createObjectURL(inputPhoto);
    const data = photoFile && { ...formData, photo: photoFile };
    if (data === null) return;
    if (data === '') return;
    dispatch(submit({ products: [data] }));
    setStateCard(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label>
        Your name
        <input
          type="text"
          {...register('name', {
            required: 'required field',
            minLength: { value: 3, message: 'min 3 chars' },
            pattern: { value: /^[A-Z]+[a-zA-Z]*$/, message: 'first capital' },
          })}
        />
        <p className={styles.error}>{errors.name?.message}</p>
      </label>
      <label>
        Your first word in the life
        <input
          type="text"
          {...register('word', {
            required: 'required field',
          })}
        />
        <p className={styles.error}>{errors.word?.message}</p>
      </label>
      <label>
        When was it
        <input
          type="date"
          {...register('date', {
            required: 'required field',
          })}
        />
        <p className={styles.error}>{errors.date?.message}</p>
      </label>
      <label>
        Who heard it
        <select {...register('heard', { required: 'required field' })}>
          <option value="mom">Mom</option>
          <option value="dad">Dad</option>
          <option value="nobody">Nobody</option>
        </select>
        <p className={styles.error}>{errors.heard?.message}</p>
      </label>
      <label>
        What was your feelings
        <label>
          <input type="checkbox" value="shame" {...register('feelings')} /> Shame
        </label>
        <label>
          <input type="checkbox" value="joy" {...register('feelings')} /> Joy
        </label>
        <label>
          <input type="checkbox" value="sad" {...register('feelings')} /> Sad
        </label>
        <label>
          <input type="checkbox" value="curious" {...register('feelings')} /> Curious
        </label>
        <label>
          <input type="checkbox" value="angry" {...register('feelings')} /> Angry af
        </label>
      </label>
      <label>
        Attach proof of your words
        <input
          type="file"
          {...register('photo', { required: 'required field' })}
          accept="image/png, image/gif, image/jpeg"
        />
        <p className={styles.error}>{errors.photo?.message}</p>
      </label>
      <label>
        Have you faked all passed info?
        <label>
          <input value="yes" type="radio" {...register('faked', { required: 'required field' })} />
          Partly
        </label>
        <label>
          <input value="no" type="radio" {...register('faked', { required: 'required field' })} />
          Nope
        </label>
        <p className={styles.error}>{errors.faked?.message}</p>
      </label>
      <label className={styles.confident}>
        <input type="checkbox" {...register('confirm', { required: 'required field' })} /> I am
        confident in my answers
        <p className={styles.error}>{errors.confirm?.message}</p>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
