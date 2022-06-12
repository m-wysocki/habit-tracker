import React from 'react';
import styles from './HabitCalendar.module.scss';
import { useAppSelector } from '../../store/hooks';

const HabitCalendar = () => {
  const habits = useAppSelector((state) => state.habits);
  return (
    <div className={styles.wrapper}>
      {habits.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
};

export default HabitCalendar;
