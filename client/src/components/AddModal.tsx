import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { searchCourses } from '../api/queries';

type Props = {};

const AddModal = (props: Props) => {
  const [inputData, setInputData] = useState({
    branch: '',
    year: '',
    semester: '',
    subject: '',
    code: '',
  });

  const [error, setError] = useState('');

  const [debouncedInputData] = useDebounce(inputData.subject, 750);

  const { data, isLoading } = useQuery(
    ['searchCourses', debouncedInputData],
    () => searchCourses(debouncedInputData),
    {
      enabled: debouncedInputData.length > 3,
    }
  );

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const subjectExistsInDB = data?.course?.length > 0;

  return (
    <div>
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal '>
        <div className='modal-box rounded-md relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle bg-[#b5197e]  border-none absolute right-2 top-2'
          >
            ✕
          </label>

          <form className='mt-8 space-y-6'>
            <select
              onChange={handleInputChange}
              name='branch'
              value={inputData.branch}
              className='select select-bordered rounded-md focus:outline-none border-2 border-[#b5197e] w-full'
            >
              <option disabled value='selected'>
                Select Branch
              </option>
              <option value='CSE'>CSE</option>
              <option value='ECE'>ECE</option>
              <option value='EEE'>EEE</option>
              <option value='MECH'>MECH</option>
              <option value='CIVIL'>CIVIL</option>
              <option value='IT'>IT</option>
            </select>
            <select
              onChange={handleInputChange}
              name='year'
              value={inputData.year}
              className='select select-bordered rounded-md focus:outline-none border-2 border-[#b5197e] w-full'
            >
              <option disabled value='selected'>
                Select Year
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
            <select
              onChange={handleInputChange}
              name='semester'
              value={inputData.semester}
              className='select select-bordered rounded-md focus:outline-none border-2 border-[#b5197e] w-full'
            >
              <option disabled value='selected'>
                Select Semester
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
            </select>
            <div className='flex flex-col'>
              <input
                type='text'
                onChange={handleInputChange}
                name='subject'
                autoComplete='off'
                value={inputData.subject}
                placeholder='Subject Name'
                className={`input input-bordered rounded-md focus:outline-none border-2 ${
                  subjectExistsInDB ? 'border-red-500' : 'border-[#b5197e]'
                } w-full`}
              />
              {subjectExistsInDB && (
                <div className='text-red-500 text-xs'>
                  Subject already exists in database
                </div>
              )}
            </div>

            <div className='flex items-center space-x-2'>
              <input
                type='text'
                readOnly
                value={inputData.code}
                placeholder='Generated Code'
                className='input flex-[0.7] cursor-not-allowed input-bordered rounded-md focus:outline-none border-2 border-[#b5197e] w-full'
              />
              <button
                disabled={subjectExistsInDB}
                className='btn flex-[0.3] rounded-md w-full bg-[#b5197e] border-none'
              >
                Generate Code
              </button>
            </div>

            <button
              type='submit'
              className='btn rounded-md w-full bg-[#b5197e] border-none'
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
