// const generateCode = () => {
//   if (inputData.branch === '' || inputData.year === '') {
//     return;
//   }

//   const { branch, year, program } = inputData;

//   let code: string;

//   const branchInitials = collegeData?.prgrm.find(
//     (prgrm: any) => prgrm.name === branch
//   )?.initial;

//   const filteredData = course?.filter((course: any) => {
//     // course.code.includes(branchInitials + year)
//     if (program === 'M.Tech' || program === 'MCA') {
//       if (year === '1') {
//         return course.code.includes(
//           (branchInitials as string) + (parseInt(year) + 5)
//         );
//       } else if (year === '2') {
//         return course.code.includes(
//           (branchInitials as string) + (parseInt(year) + 5)
//         );
//       }
//     } else {
//       return course.code.includes(branchInitials + year);
//     }
//   });

//   const codeInDb =
//     filteredData.length > 0 && filteredData.map((course: any) => course.code);

//   const lastCode = codeInDb && codeInDb[codeInDb.length - 1];

//   if (lastCode === false) {
//     // code = `${branchInitials}${year}00E`;
//     if (program === 'M.Tech' || program === 'MCA') {
//       if (year === '1') {
//         code = `${branchInitials}${parseInt(year) + 5}00E`;
//       } else if (year === '2') {
//         code = `${branchInitials}${parseInt(year) + 5}00E`;
//       }
//     } else {
//       code = `${branchInitials}${year}00E`;
//     }
//   } else {
//     const num = parseInt(lastCode.slice(3, 5)) + 1;

//     let numWithZeroes = num.toString();

//     if (numWithZeroes.length > 1) {
//       code = `${branchInitials}${year}${numWithZeroes}E`;
//     } else {
//       numWithZeroes = numWithZeroes.padStart(2, '0');

//       if ((program === 'M.Tech' || program === 'MCA') && year === '1') {
//         code = `${branchInitials}${parseInt(year) + 5}${numWithZeroes}E`;
//       } else if (
//         (program === 'M.Tech' || program === 'MCA') &&
//         year === '2'
//       ) {
//         code = `${branchInitials}${parseInt(year) + 5}${numWithZeroes}E`;
//       } else {
//         code = `${branchInitials}${year}${numWithZeroes}E`;
//       }
//     }
//   }

//   setInputData((prev) => ({ ...prev, code }));
// };
