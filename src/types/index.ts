export interface FormDataProps {
  firstName: string;
  lastName: string;
  email: string;
  url: string;
  visaCategories: string[];
  file: File | null;
  additionalInfo: string;
};

export interface HeaderProps {
    url: string;
    title: string;
    text?: string;
}