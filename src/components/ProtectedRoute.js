import React from "react";
import { Navigate } from "react-router-dom";
import { useMyContext } from "../store/ContextApi";
// prop로 관리자 페이지
const ProtectedRoute = ({ children, adminPage }) => {
  // 컨텍스트로 토큰과 어드민페이지 확인
  const { token, isAdmin } = useMyContext();

  // 토큰이 없으면 로그인으로(인증안됨)
  if (!token) {
    return <Navigate to="/login" />;
  }

  // 인증된 유저지만 관리자 권한이 없이 관리자 페이지 요청시
  if (token && adminPage && !isAdmin) {
    return <Navigate to="/access-denied" />;
  }

  return children;
};

export default ProtectedRoute;
