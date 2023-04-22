const useSearchFilter = ({ course, searchInput }: any) => {
  const searchRes = course?.filter((course: any) => {
    const result =
      searchInput === ''
        ? course
        : course.subject.toLowerCase().includes(searchInput.toLowerCase());

    return result;
  });

  return searchRes;
};
export default useSearchFilter;
