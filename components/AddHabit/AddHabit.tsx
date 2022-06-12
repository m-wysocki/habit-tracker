import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../store/hooks';
import { addHabit } from '../../store/slices/habitsSlice';

type Inputs = {
  name: string;
  frequency: number;
};

const AddHabit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addHabit(data));
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="name" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
        <input
          type="number"
          placeholder="weekly frequency"
          {...register('frequency', { required: true })}
        />
        {errors.frequency && <span>This field is required</span>}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddHabit;
