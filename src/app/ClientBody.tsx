"use client";

import { useEffect } from "react";
import MainLayout from "@/components/layout/main-layout";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Remove any extension-added attributes during hydration
    const body = document.body;
    const attributesToRemove = Array.from(body.attributes)
      .filter(attr => !['class', 'suppressHydrationWarning'].includes(attr.name))
      .map(attr => attr.name);
    
    attributesToRemove.forEach(attr => body.removeAttribute(attr));
  }, []);

  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}
