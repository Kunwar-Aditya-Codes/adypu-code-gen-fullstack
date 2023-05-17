import { useEffect, useState } from 'react';
import { semester, collegeData } from '../utils/data';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../api/queryClient';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import toast from 'react-hot-toast';

const AddModal = ({ course }: any) => {
  const axiosPrivate = useAxiosPrivate();

  const [inputData, setInputData] = useState({
    branch: '',
    year: '',
    program: '',
    semester: '',
    subject: '',
    code: '',
  });

  const mutation = useMutation({
    mutationFn: async () =>
      await axiosPrivate.post('/courses', inputData, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),

    onSuccess: (data: any) => {
      queryClient.invalidateQueries({
        queryKey: ['courses'],
      });

      setInputData({
        branch: '',
        year: '',
        program: '',
        semester: '',
        subject: '',
        code: '',
      });

      toast.success('Course Added Successfully!', {
        id: 'add-course',
      });
    },

    onError: (error: any) => {
      console.log(error);
      toast.error('Error adding course!', {
        id: 'add-course',
      });
    },
  });

  const [searchFilteredData, setSearchFilteredData] = useState<any>([]);

  // Handle Input Change
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  // Code Generator
  const generateCode = () => {
    if (inputData.branch === '' || inputData.year === '') {
      return;
    }

    const { branch, year } = inputData;
    let code: string;
    const branchInitials = collegeData?.prgrm.find(
      (prgrm: any) => prgrm.name === branch
    )?.initial;

    const filteredData = course?.filter((course: any) =>
      course.code.includes(branchInitials + year)
    );

    const codeInDb =
      filteredData.length > 0 && filteredData.map((course: any) => course.code);

    const lastCode = codeInDb && codeInDb[codeInDb.length - 1];

    if (lastCode === false) {
      code = `${branchInitials}${year}00E`;
    } else {
      const num = parseInt(lastCode.slice(3, 5)) + 1;
      let numWithZeroes = num.toString();
      if (numWithZeroes.length > 1) {
        code = `${branchInitials}${year}${numWithZeroes}E`;
      } else {
        numWithZeroes = numWithZeroes.padStart(2, '0');
        code = `${branchInitials}${year}${numWithZeroes}E`;
      }
    }

    setInputData((prev) => ({ ...prev, code }));
  };

  // Filter Data
  const filterSearchData = () => {
    const filteredData = course?.filter((course: any) =>
      course.subject.toLowerCase().includes(inputData.subject.toLowerCase())
    );

    setSearchFilteredData(filteredData);
  };
  useEffect(() => {
    if (inputData.subject.length > 0) {
      filterSearchData();
    } else {
      setSearchFilteredData([]);
    }
  }, [inputData.subject]);

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.loading('Adding Course...', {
      id: 'add-course',
    });

    const { branch, year, program, semester, subject, code } = inputData;

    if (!branch || !year || !program || !semester || !subject || !code) {
      toast.error('Please fill all the fields', {
        id: 'add-course',
      });
      return;
    }

    mutation.mutate();
  };

  return (
    <div>
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal '>
        <div className='modal-box rounded-md relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle bg-[#00b8a3] border-none absolute right-2 top-2'
          >
            ✕
          </label>

          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            {/* Program */}
            <select
              onChange={handleInputChange}
              name='program'
              value={inputData.program || 'selected'}
              className='select select-bordered rounded-md focus:outline-none border-2 border-[#00b8a3] w-full'
            >
              <option disabled value='selected'>
                Select Degree
              </option>
              {collegeData?.degree.map((deg: any) => (
                <option key={deg} value={deg}>
                  {deg}
                </option>
              ))}
            </select>

            {/* Programs */}
            <select
              onChange={handleInputChange}
              name='branch'
              value={inputData.branch || 'selected'}
              className='select select-bordered rounded-md focus:outline-none border-2 border-[#00b8a3] w-full'
            >
              <option disabled value='selected'>
                Select Program
              </option>
              {collegeData?.prgrm?.map((pg: any) => (
                <option key={pg.name} value={pg.name}>
                  {pg.name}
                </option>
              ))}
            </select>

            {/* Year */}
            <select
              onChange={handleInputChange}
              name='year'
              value={inputData.year || 'selected'}
              className='select select-bordered rounded-md focus:outline-none border-2 border-[#00b8a3] w-full'
            >
              <option disabled value='selected'>
                Select Year
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>

            {/*  Semester */}
            <select
              onChange={handleInputChange}
              name='semester'
              value={inputData.semester || 'selected'}
              className='select select-bordered rounded-md focus:outline-none border-2 border-[#00b8a3] w-full'
            >
              <option disabled value='selected'>
                Select Semester
              </option>
              {semester.map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
            </select>

            {/* Subject */}
            <div className='flex flex-col relative'>
              <input
                type='text'
                onChange={handleInputChange}
                name='subject'
                autoComplete='off'
                value={inputData.subject}
                placeholder='Course Name'
                className={`input input-bordered rounded-md focus:outline-none border-2 border-[#00b8a3] w-full`}
              />
              {searchFilteredData?.length !== 0 && (
                <div className='bg-[#00b8a3] text-white mt-1 absolute w-full top-12 divide-y  p-2 rounded-md max-h-[5rem] z-50 overflow-y-auto'>
                  {searchFilteredData?.map((course: any) => (
                    <div
                      key={course._id}
                      className=' py-1 flex items-center space-x-2 '
                    >
                      <p>{course.subject}</p>
                      <span>[{course.code}]</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Code */}
            <div className='flex items-center space-x-2'>
              <input
                type='text'
                readOnly
                value={inputData.code}
                placeholder='Generated Code'
                className='input flex-[0.7] cursor-not-allowed input-bordered rounded-md focus:outline-none border-2 border-[#00b8a3] w-full'
              />
              <button
                type='button'
                onClick={generateCode}
                disabled={searchFilteredData?.length !== 0}
                className='btn flex-[0.3] rounded-md w-full bg-[#0069d9] border-none'
              >
                Generate Code
              </button>
            </div>

            <button
              type='submit'
              className='btn rounded-md w-full bg-[#0069d9] border-none'
            >
              Add Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddModal;
