import m from 'leven';
import t from 'assert';

t.equal(m('a', 'b'), 1);
t.equal(m('ab', 'ac'), 1);
t.equal(m('ac', 'bc'), 1);
t.equal(m('abc', 'axc'), 1);
t.equal(m('kitten', 'sitting'), 3);
t.equal(m('xabxcdxxefxgx', '1ab2cd34ef5g6'), 6);
t.equal(m('cat', 'cow'), 2);
t.equal(m('xabxcdxxefxgx', 'abcdefg'), 6);
t.equal(m('javawasneat', 'scalaisgreat'), 7);
t.equal(m('example', 'samples'), 3);
t.equal(m('sturgeon', 'urgently'), 6);
t.equal(m('levenshtein', 'frankenstein'), 6);
t.equal(m('distance', 'difference'), 5);
t.equal(m('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文'), 2);
