const useSearchFilter = ({ course, searchInput }: any) => {
  const searchRes = course?.filter((course: any) => {
    const res =
      course.subject.toLowerCase().includes(searchInput.toLowerCase()) ||
      course.branch.toLowerCase().includes(searchInput.toLowerCase()) ||
      course.program.toLowerCase().includes(searchInput.toLowerCase());

    const result = searchInput === '' ? course : res;

    return result;
  });

  return searchRes;
};
export default useSearchFilter;
