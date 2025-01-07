import React, { createContext, useContext, useState } from 'react';

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  // 검증된 이메일 주소
  const [authenticatedEmail, setAuthenticatedEmail] = useState("");
  // 이메일 검증 완료 여부
  const [emailAuthStatus, setEmailAuthStatus] = useState(false);

  return (
    <EmailContext.Provider 
      value={{ 
        authenticatedEmail,
        setAuthenticatedEmail,
        emailAuthStatus, 
        setEmailAuthStatus
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => {
    const context = useContext(EmailContext);
    if (!context) {
      throw new Error('useEmail must be used within an EmailProvider');
    }
    return context;
  };