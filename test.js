import test from 'ava';
import m from '.';

test('1 is -272.15', t => {
	t.is(m(1), -272.15);
});

test('278 is 4.85', t => {
	t.is(m(278), 4.85);
});

test('20 is not -253.15', t => {
	t.not(m(20), '-253.15');
});

test('45 is not -238.15', t => {
	t.not(m(45), -238.15);
});

test('throw on wrong input', t => {
	t.throws(() => m('string'), TypeError);
});
