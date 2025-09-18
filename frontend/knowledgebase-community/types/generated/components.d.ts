import type { Schema, Struct } from '@strapi/strapi';

export interface ContentAdditionalInformation extends Struct.ComponentSchema {
  collectionName: 'components_content_additional_informations';
  info: {
    displayName: 'additional_information';
    icon: 'information';
  };
  attributes: {
    description: Schema.Attribute.Text;
    header: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    second_header: Schema.Attribute.String;
  };
}

export interface ContentGuideTable extends Struct.ComponentSchema {
  collectionName: 'components_content_guide_tables';
  info: {
    displayName: 'guide.table';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface ContentStep extends Struct.ComponentSchema {
  collectionName: 'components_content_steps';
  info: {
    displayName: 'step';
    icon: 'calendar';
  };
  attributes: {
    stepDescription: Schema.Attribute.String;
    stepImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentStepGuide extends Struct.ComponentSchema {
  collectionName: 'components_content_step_guide_s';
  info: {
    displayName: 'step-guide ';
    icon: 'write';
  };
  attributes: {
    stepNumber: Schema.Attribute.Component<'content.step', false>;
    title: Schema.Attribute.String;
  };
}

export interface ContentTable extends Struct.ComponentSchema {
  collectionName: 'components_content_tables';
  info: {
    displayName: 'table';
    icon: 'bulletList';
  };
  attributes: {
    table: Schema.Attribute.RichText;
  };
}

export interface ContentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_text_blocks';
  info: {
    displayName: 'text-block';
    icon: 'bold';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.additional-information': ContentAdditionalInformation;
      'content.guide-table': ContentGuideTable;
      'content.step': ContentStep;
      'content.step-guide': ContentStepGuide;
      'content.table': ContentTable;
      'content.text-block': ContentTextBlock;
    }
  }
}
