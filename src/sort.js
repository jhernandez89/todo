const sortByCompleted = (data) => {
    const dataSorted = data.slice().sort((a, b) => a.completed-b.completed);
    return dataSorted;
}

export default sortByCompleted;