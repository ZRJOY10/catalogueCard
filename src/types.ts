export interface Publication {
  place: string;
  publisher: string;
  year: string;
}

export interface PhysicalDescription {
  pages: string;
  dimensions: string;
}

export interface CatalogueCard {
  id: string;
  classification_number: string;
  call_number: string;
  author: string;
  title: string;
  additional_authors: string[];
  publication: Publication;
  physical_description: PhysicalDescription;
  edition: string;
  notes: string;
  isbn: string;
  subjects: string[];
  barcode: string;
}

export interface CardFormData {
  classification_number: string;
  call_number: string;
  author: string;
  title: string;
  additional_authors: string[];
  publication: Publication;
  physical_description: PhysicalDescription;
  edition: string;
  notes: string;
  isbn: string;
  subjects: string[];
  barcode: string;
}