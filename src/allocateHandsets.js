const allocate = (previousHandsets, allocationSize) => previousHandsets - allocationSize;
const deallocate = (previousHandsets, allocationSize) => previousHandsets + allocationSize;

module.exports = {
	allocate,
	deallocate,
};
