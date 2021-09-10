import React from 'react'

import ImageHero from './image-hero.component'
import GridContainer from './grid-container.component'
import Grid from './grid.component'
import CustomLink from '../../custom-link/custom-link.component'

import { GRID_IMAGES } from '../../../constants/hero.constants'

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold font-hind tracking-tight text-blue-gray-800 sm:text-7xl uppercase">
              Comeback Season
            </h1>
            <p className="mt-4 text-lg font-osans text-blue-gray-500">
              New goals. New dreams. All-new men's back to school styles for
              every part of your week.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <GridContainer>
                <Grid>
                  {GRID_IMAGES.grid1.images.map(image => (
                    <ImageHero
                      key={image.publicId}
                      publicId={image.publicId}
                      customStyles={image.styles || ''}
                    />
                  ))}
                </Grid>
                <Grid>
                  {GRID_IMAGES.grid2.images.map(image => (
                    <ImageHero
                      key={image.publicId}
                      publicId={image.publicId}
                      customStyles={image.styles || ''}
                    />
                  ))}
                </Grid>
                <Grid>
                  {GRID_IMAGES.grid3.images.map(image => (
                    <ImageHero
                      key={image.publicId}
                      publicId={image.publicId}
                      customStyles={image.styles || ''}
                    />
                  ))}
                </Grid>
              </GridContainer>
              <CustomLink
                type={'link-button'}
                link={'/hats'}
                customStyles={
                  'inline-block text-center bg-purple-600 py-3 px-8 text-white hover:bg-purple-700'
                }
              >
                Shop Now
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
