import { useParams, useLocation, useNavigate } from "react-router";
import { useCallback, useEffect } from "react";

const STORAGE_KEY = "selected-storefront";

export interface Storefront {
  name: string;
  color: string;
}

export const storefronts: Storefront[] = [
  { name: "Snaptrip", color: "#f97316" },
  { name: "LateRooms.com", color: "#3b0764" },
  { name: "The Hotel Guru", color: "#6366f1" },
  { name: "Last Minute Cottages", color: "#22c55e" },
  { name: "Dog Friendly Cottages", color: "#ef4444" },
];

function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/\.com$/, "");
}

function fromSlug(slug: string): Storefront | undefined {
  return storefronts.find((s) => toSlug(s.name) === slug);
}

function getStoredStorefront(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY);
}

function setStoredStorefront(name: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, name);
}

export function useStorefront() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const isStorefrontRoute = location.pathname.startsWith("/storefronts/");

  // Get storefront from URL param or localStorage
  const storefrontFromUrl = params.storefront ? fromSlug(params.storefront) : undefined;
  const storefrontFromStorage = getStoredStorefront();

  const currentStorefront = storefrontFromUrl?.name
    ?? storefrontFromStorage
    ?? storefronts[0].name;

  // Sync to localStorage when URL changes
  useEffect(() => {
    if (storefrontFromUrl) {
      setStoredStorefront(storefrontFromUrl.name);
    }
  }, [storefrontFromUrl]);

  const setStorefront = useCallback((name: string) => {
    setStoredStorefront(name);

    // If on a storefront route, navigate to the same page with new storefront
    if (isStorefrontRoute && params.storefront) {
      const newSlug = toSlug(name);
      const newPath = location.pathname.replace(
        `/storefronts/${params.storefront}`,
        `/storefronts/${newSlug}`
      );
      navigate(newPath);
    }
  }, [isStorefrontRoute, params.storefront, location.pathname, navigate]);

  const getStorefrontPath = useCallback((basePath: string) => {
    const slug = toSlug(currentStorefront);
    return `/storefronts/${slug}${basePath}`;
  }, [currentStorefront]);

  return {
    storefronts,
    currentStorefront,
    setStorefront,
    getStorefrontPath,
    isStorefrontRoute,
  };
}
