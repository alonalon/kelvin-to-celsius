import test from 'ava';
import k from './';

test(t => {
	t.is(k(1), -272.15);
});

test(t => {
	t.is(k(278), 4.85);
});

test(t => {
	t.not(k(20), '-253.15');
});

test(t => {
	t.not(k(45), -238.15);
});

test(t => {
	t.throws(() => k('string'), TypeError);
});
