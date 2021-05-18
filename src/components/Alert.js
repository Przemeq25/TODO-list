import { Close, Alert as AlertBox } from '@theme-ui/components';
import React, { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { alertAtom } from '../atoms';

const Alert = () => {
  const { isOpen, text, close, timeout, type } = useRecoilValue(alertAtom);
  const resetAlert = useResetRecoilState(alertAtom);

  useEffect(() => {
    const showAlert = setTimeout(() => {
      resetAlert();
    }, timeout);
    return () => clearTimeout(showAlert);
  });

  if (!isOpen) return null;
  return (
    <AlertBox
      sx={{ position: 'fixed', top: 10, right: 10, zIndex: '1000' }}
      variant={type}
    >
      {text}
      {close && <Close ml="auto" mr={-2} onClick={() => resetAlert()} />}
    </AlertBox>
  );
};

export default Alert;
