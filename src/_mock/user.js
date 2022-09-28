import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  company: faker.datatype.number({min: 0, max: 100}),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'removed']),
  role: sample([
    'Student',
    'Volunteer',
  ]),
}));

export default users;
