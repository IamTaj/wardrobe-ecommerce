export default {
  name: 'offers',
  type: 'document',
  title: 'Offers',
  fields: [
    {
      name: 'offer',
      type: 'array',
      title: 'Offers',
      of: [{type: 'string'}],
    },
  ],
}
