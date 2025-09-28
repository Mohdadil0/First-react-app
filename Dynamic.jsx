import React from 'react';
const returnCollege = () => {
const college = 'BNN College';
return college;
};
export const Personal = () => {
const name = 'Adil';
const age = 22;
return (
<>
<h1>Hello, {name}!</h1>

<p>I am {age} years old.</p>

<p>My SSC and HSC marks equals to: 74+57}%</p>

<p>College: {returnCollege()}</p>
</> 
);
};
