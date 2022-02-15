import { h } from 'preact';
import Navigation from '../src/components/navigation';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Navigation', () => {
	test('Navigation renders 3 nav items', () => {
		const context = shallow(<Navigation />);
		expect(context.find('h1').text()).toBe('Preact App');
		expect(context.find('Link').length).toBe(3);
	});
});
