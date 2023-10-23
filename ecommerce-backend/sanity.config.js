import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard'
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list'

export default defineConfig({
  name: 'default',
  title: 'ecommerce-backend',

  projectId: '7qg61xe1',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    dashboardTool({
      widgets: [
        projectInfoWidget({
          layout: {
            width: 'large',
          },
        }),
        projectUsersWidget({
          layout: {
            width: 'medium',
          },
        }),
        documentListWidget({
          title: 'ELECTRONICS',
          query: '*[_type == "products" && category == "ELECTRONICS"]',
        }),
        documentListWidget({
          title: 'CLOTHINGS',
          query: '*[_type == "products" && category == "CLOTHING"]',
        }),
        documentListWidget({
          title: 'DAILY ESSENTIALS',
          query: '*[_type == "products" && category == "DAILY ESSENTIALS"]',
        }),
        documentListWidget({
          title: 'HELEMTS',
          query: '*[_type == "products" && category == "HELMET"]',
        }),
        documentListWidget({
          title: 'BACKPACKS',
          query: '*[_type == "products" && category == "BACKPACK"]',
        }),
        documentListWidget({
          title: 'OUT OF STOCKS PRODUCTS',
          query: '*[_type == "products" && status =="OUTOFSTOCK" ]',
          layout: {
            width: 'medium',
          },
        }),
        // documentListWidget({
        //   title: 'IN STOCK PRODUCTS',
        //   query: '*[_type == "products" && status =="AVAILABLE" ]',
        //   layout: {
        //     width: 'medium',
        //   },
        // }),
        documentListWidget({
          title: 'OFFERS',
          showCreateButton: true,
          limit: 4,
          types: ['offers'],
          layout: {
            width: 'small',
          },
        }),
        documentListWidget({
          title: 'LAST CREATED PRODUCTS',
          showCreateButton: true,
          limit: 4,
          types: ['products'],
          layout: {
            width: 'full',
          },
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
