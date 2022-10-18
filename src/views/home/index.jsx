import React, { memo, useEffect } from 'react'
import tsjaRequest from '@/services'

const home = memo(() => {
  useEffect(() => {
    tsjaRequest.get({ url: '/home/highscore' }).then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <div>
      home
    </div>
  )
})

export default home
