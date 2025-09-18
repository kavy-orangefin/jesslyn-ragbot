export interface ContentTextBlock {
  __component: 'content.text-block';
  id: number;
  content: string;
}

export interface ContentStep {
  __component: 'content.step';
  id: number;
  stepDescription: string;
  stepImage?: {
    url: string;
    name: string;
  };
}

export interface ContentStepGuide {
  __component: 'content.step-guide';
  id: number;
  title?: string;
  stepNumber?: ContentStep;
}

export interface ContentAdditionalInformation {
  __component: 'content.additional-information';
  id: number;
  header?: string;
  description?: string;
  second_header?: string;
  media?: {
    url: string;
    name: string;
    alternativeText?: string;
  };
}

export interface ContentTable {
  __component: 'content.table';
  id: number;
  table: string;
}

export type ContentBlock = 
  | ContentTextBlock 
  | ContentStepGuide 
  | ContentAdditionalInformation 
  | ContentTable;

export interface ContentItem {
  id: number;
  title: string;
  setionID: string;
  content: ContentBlock[];
}

export interface Subsection {
  id: number;
  title: string;
  sectionId: string;
  contentItems?: ContentItem[];
} 