// writing for speed rather than readability for faster sorting.
// sorts items by completed last
const sortByCompleted = (data) => {
    // slicing to create new array instead of altering reference type
    const dataSorted = data.slice().sort((a, b) => a.completed-b.completed);
    return dataSorted;
}

export default sortByCompleted;
