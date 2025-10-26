const ctgr = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${ctgr.length}`);

ctgr.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('li').length - 1; 
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
});