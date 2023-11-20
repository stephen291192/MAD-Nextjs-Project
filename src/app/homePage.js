"use client"

import React, { useState } from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, 
  LockClosedIcon } from '@heroicons/react/24/outline'
  import {
    CreateMailReq
  } from './apiservice/api'
const HomePage = () => {
  const [email, setEmail] = useState('');
  const CreateMailReqFunction = async (companyId) => {
    const body = {
      roleName: roleName,
      code: RoleCode,
      abbreviation: RoleAbb,
      reportingTo: reportingTo?.value === undefined ? null : reportingTo.value,
    }

    const response = await CreateMailReq(body, companyId, departmentId, designationId)
    if (response) {
      if (response?.success) {
        toast.success(response?.message)
        setAddScreen(!addScreen)
        setRoleName('')
        // setDesignationOpt([])
        setDesignation('')
        setTableShow(false)
      } else {
        toast.error(response?.error)
      }
    }
  }




  const features = [
    {
      name: 'Push to deploy',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: LockClosedIcon,
    },
    {
      name: 'Simple queues',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    },
   
  ]
  const Box = ({ icon, title, content }) => {
    return (
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-md shadow-md">
        {icon}
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{content}</p>
      </div>
    );
  };
    return (
      <>
      <div className="bg-white ">
       <div className="relative isolate px-6 lg:px-8">
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-20">
         
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="mt-6 text-sm leading-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus rutrum, quam ut volutpat commodo, sapien metus convallis erat, cursus suscipit neque eros quis nisl. Donec non fringilla diam, non porta elit. 
            </p>
            <div className="flex max-w-md gap-x-1 Newsletter">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                required
                className="border min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                onClick={(e) => {
                  setEmail(e.target.value)
                  CreateMailReqFunction(state.companyId)
                  
                }}
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
            
        </div>
        <div className="max-w-7xl mC">
        <div class="grid grid-cols-5 bg-gray-300">
            <div class="bg-gray-300 p-4 text-center">
              
            <img class="h-auto rounded-lg p-8" 
            src="https://images.prismic.io/vueai/61c50e48-fe3b-4345-b550-74f55a5c757e_585990234f6ae202fedf28cf+2.png?auto=compress%2Cformat&fit=max&w=256" alt="image description" />

              </div>
              <div class="bg-gray-300 p-4 text-center"><img class=" p-8 h-auto rounded-lg" 
            src="https://images.prismic.io/vueai/f18d025f-0df6-4116-aaf2-bec083ea2f8d_image+23.png?auto=compress%2Cformat&fit=max&w=256" alt="image description" />
            </div>
              <div class="bg-gray-300 p-4 text-center"><img class=" p-8 h-auto rounded-lg" 
            src="https://images.prismic.io/vueai/f18d025f-0df6-4116-aaf2-bec083ea2f8d_image+23.png?auto=compress%2Cformat&fit=max&w=256" alt="image description" />
            </div>
              <div class="bg-gray-300 p-4 text-center"><img class="p-8 h-auto rounded-lg" 
            src="https://images.prismic.io/vueai/2eef6481-13fb-413e-ae2a-1c450f0f9a67_Microsoft_logo_%282012%29+2.png?auto=compress%2Cformat&fit=max&w=256" alt="image description" />
            </div>
              <div class="bg-gray-300 p-4 text-center">
                <img class="h-auto rounded-lg p-8" 
            src="https://images.prismic.io/vueai/f5047834-7428-4e95-aa60-b35232ccc78f_Infosys_logo+2.png?auto=compress%2Cformat&fit=max&w=256" alt="image description" />
            </div>

            
            </div>
            <div className="bg-gray-300 p-5 text-sm font-semibold text-center mC">
              COMPANY ACHIEVEMENT
            </div>
        </div>
        
        </div>
     
        <br /><br /><br />
      </div>

      <div className="bg-black py-24 sm:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <p className="mt-2 text-3xl text-white font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features -  Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipiscing elit magnis, vel varius euismod class convallis ut turpis commodo ad,
           
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 bg-gray-300">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>


    {/* section 02 */}

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    
    {/* Footer Top section */}
    <div className="bg-gray py-24 sm:py-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
           Feel free to download this wireframe <br /> 
           Stay updated for more
          </p>
         <button className='mt-5 btncall'>THANK You</button>
        </div>
       
      </div>
    </div>

      </>
    
    );
  };
  
  export default HomePage;
  