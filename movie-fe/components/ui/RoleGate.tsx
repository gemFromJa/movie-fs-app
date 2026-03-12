"use client";

import type { ReactNode } from "react";
import type { Role } from "@/types";
import { useAuth, hasRole } from "@/context/AuthContext";

interface RoleGateProps {
  requires: Role;
  children: ReactNode;
  fallback?: ReactNode;
}

export function RoleGate({ requires, children, fallback = null }: RoleGateProps) {
  const { user } = useAuth();
  return hasRole(user, requires) ? <>{children}</> : <>{fallback}</>;
}
