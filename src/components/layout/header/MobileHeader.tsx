"use client";

import { useState, useEffect } from "react";

import { ArrowLeft, Grip, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Container from "./Container";
import HeaderActions from "./HeaderActions";
import NameCard from "./NameCard";
import Nav from "./Nav";
import { ThemeToggleBtn } from "./ThemeToggleBtn";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("페이지");
  const pathname = usePathname();
  const router = useRouter();

  const isMainPage = pathname === "/";

  // 페이지 제목 결정
  useEffect(() => {
    const getPageTitle = async () => {
      if (pathname.startsWith("/projects/")) {
        const slug = pathname.split("/projects/")[1];
        if (slug) {
          try {
            const { projectsData } = await import("@/data/projects");
            const project = projectsData.find((p) => p.slug === slug);
            setPageTitle(project?.title || "프로젝트 상세");
          } catch {
            setPageTitle("프로젝트 상세");
          }
        } else {
          setPageTitle("프로젝트");
        }
      } else {
        setPageTitle("페이지");
      }
    };

    if (!isMainPage) {
      getPageTitle();
    }
  }, [pathname, isMainPage]);

  return (
    <div className="block md:hidden">
      <Container>
        <div className="flex w-full items-center justify-between py-4">
          {isMainPage ? (
            <NameCard />
          ) : (
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.back()}
                className="shrink-0"
              >
                <ArrowLeft className="size-5" />
                <span className="sr-only">Go back</span>
              </Button>
              <h1 className="truncate text-lg font-bold">{pageTitle}</h1>
            </div>
          )}

          <div className="flex shrink-0 items-center gap-1">
            {isMainPage ? (
              <>
                {/* 메인 페이지: 다크모드 토글 + 드로워 버튼 */}
                <ThemeToggleBtn />
                <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Grip className="size-5" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <div className="flex w-full items-center justify-between">
                        <div>
                          <div className="sr-only">
                            <DrawerTitle>메뉴</DrawerTitle>
                            <DrawerDescription>네비게이션 메뉴입니다.</DrawerDescription>
                          </div>
                          <NameCard />
                        </div>
                        <DrawerClose asChild>
                          <Button variant="ghost" size="icon">
                            <X className="size-5" />
                            <span className="sr-only">Close menu</span>
                          </Button>
                        </DrawerClose>
                      </div>
                    </DrawerHeader>

                    <div className="px-4">
                      <Nav direction="vertical" onNavigate={() => setIsOpen(false)} />
                    </div>

                    <DrawerFooter>
                      <div className="flex w-full items-center justify-center">
                        <HeaderActions />
                      </div>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </>
            ) : (
              <>
                {/* 서브 페이지: 다크모드 토글만 */}
                <ThemeToggleBtn />
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileHeader;
