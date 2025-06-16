import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  
  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "",
    },
  },
  
  schema: {
    collections: [
      {
        name: "settings",
        label: "הגדרות המשרד",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "lawyer_name",
            label: "שם עורך הדין",
            required: true,
          },
          {
            type: "string", 
            name: "phone",
            label: "טלפון",
          },
          {
            type: "string",
            name: "email", 
            label: "אימייל",
          },
          {
            type: "string",
            name: "address",
            label: "כתובת המשרד",
          },
          {
            type: "number",
            name: "experience_years",
            label: "שנות ניסיון",
          },
        ],
      },
      {
        name: "testimonial",
        label: "המלצות לקוחות",
        path: "content/testimonials",
        fields: [
          {
            type: "string",
            name: "client_name", 
            label: "שם הלקוח",
            required: true,
          },
          {
            type: "string",
            name: "practice_area",
            label: "תחום משפטי",
          },
          {
            type: "rich-text",
            name: "content",
            label: "תוכן ההמלצה", 
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "דירוג (1-5)",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "תאריך ההמלצה",
          },
        ],
      },
    ],
  },
});
