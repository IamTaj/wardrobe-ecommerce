const CATEGORY = [
  {title: 'CLOTHING', value: 'CLOTHING'},
  {title: 'ELECTRONICS', value: 'ELECTRONICS'},
  {title: 'DAILY ESSENTAILS', value: 'DAILY ESSENTIALS'},
  {title: 'BACKPACK', value: 'BACKPACK'},
  {title: 'JEWELLERY', value: 'JEWELLERY'},
  {title: 'HELMET', value: 'HELMET'},
  // ...
]
const TYPES = [
  {title: 'MENS', value: 'MENS'},
  {title: 'WOMENS', value: 'WOMENS'},
  {title: 'KIDS', value: 'KIDS'},
  {title: 'SMARTPHONES', value: 'SMARTPHONES'},
  {title: 'LAPTOP', value: 'LAPTOP'},
  {title: 'FRAGRANCES', value: 'FRAGRANCES'},
  {title: 'SKINCARE', value: 'SKINCARE'},
  {title: 'NONE', value: 'NONE'},
]
const AVAILABILITY = [
  {title: 'AVAILABLE', value: 'AVAILABLE'},
  {title: 'OUT OF STOCK', value: 'OUTOFSTOCK'},
]
export default {
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'Product ID Number',
      validation: (Rule) =>
        Rule.required().min(1).max(100).error('Product ID Number cannot be in zero or negative'),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Product Title',
      validation: (Rule) => [
        Rule.max(150).warning('Shorter titles are usually better'),
        Rule.min(5).error('Please provide a meaningful title'),
      ],
    },
    {
      name: 'description',
      type: 'string',
      title: 'Product Description',
      validation: (Rule) => [
        Rule.max(150).warning('Shorter Description are usually better'),
        Rule.min(5).warning('A better description can attract better customer'),
      ],
    },
    {
      name: 'category',
      type: 'string',
      title: 'Product Category',
      options: {
        list: CATEGORY,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      //   hidden: ({document}) => !document?.category,
      hidden: ({document}) => !document?.category,
      options: {
        list: TYPES,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      type: 'string',
      title: 'Product Availability',
      options: {
        list: AVAILABILITY,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
      validation: (Rule) =>
        Rule.required().min(1).error('Product price cannot be in zero or negative'),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Product Rating',
      validation: (Rule) =>
        Rule.min(0).max(5).error('Product rating cannot in negative and not greater than 5'),
    },
    {
      name: 'reviewcount',
      type: 'number',
      title: 'Product Review Count',
      hidden: ({document}) => !document?.rating,
    },
    {
      name: 'productimage',
      type: 'image',
      title: 'Product Image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Product Image Caption',
        },
      ],
    },
    {
      title: 'Offers',
      name: 'offers',
      type: 'reference',
      to: [{type: 'offers'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
