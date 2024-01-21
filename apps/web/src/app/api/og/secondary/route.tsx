/* eslint-disable react/no-unknown-property */

import * as React from 'react'
import {ogImageSchema} from '@nerdfish-website/lib/validations'
import {ImageResponse} from '@vercel/og'

export const runtime = 'edge'

const interRegular = fetch(
  new URL('../../../../assets/fonts/Inter-Regular.ttf', import.meta.url),
).then(res => res.arrayBuffer())

export async function GET(req: Request) {
  try {
    const fontRegular = await interRegular

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))

    const paint = '#fff'

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: paint,
            backgroundImage:
              'linear-gradient(17deg, rgba(241,154,87,1) 0%, rgba(212,101,54,1) 54%, rgba(215,92,38,1) 100%)',
          }}
        >
          {values.image ? (
            <img
              style={{
                zIndex: -1,
                left: '50px',
                top: '100px',
              }}
              src={values.image}
              tw="rounded-xl shadow-2xl absolute"
              height="430px"
              width="1100px"
              alt="seo"
            />
          ) : null}

          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 264 87"
            height="24px"
            style={{
              zIndex: 10,
            }}
          >
            <path
              d="M20.552 39.824c-.768.384-1.6.72-2.496 1.008-.864.288-1.776.56-2.736.816 1.92.448 3.664 1.056 5.232 1.824l15.696 8.208c.832.384 1.408.864 1.728 1.44a3.61 3.61 0 0 1 .528 1.92v9.312L.056 44.24v-5.232l38.448-20.064v9.312c0 .672-.176 1.296-.528 1.872-.32.576-.896 1.056-1.728 1.44l-15.696 8.256Zm33.511-20.256c0-1.984.368-3.84 1.104-5.568.768-1.76 1.792-3.28 3.072-4.56a14.184 14.184 0 0 1 4.608-3.072c1.76-.736 3.649-1.104 5.664-1.104 2.017 0 3.904.368 5.665 1.104 1.791.736 3.328 1.76 4.608 3.072 1.311 1.28 2.335 2.8 3.072 4.56.768 1.728 1.151 3.584 1.151 5.568 0 1.984-.383 3.84-1.151 5.568a14.323 14.323 0 0 1-3.072 4.56c-1.28 1.28-2.817 2.304-4.609 3.072-1.76.736-3.647 1.104-5.663 1.104-2.016 0-3.904-.368-5.665-1.104-1.76-.768-3.296-1.792-4.608-3.072a15.459 15.459 0 0 1-3.072-4.56c-.736-1.728-1.104-3.584-1.104-5.568Zm3.456 0c0 1.536.288 2.976.864 4.32a11.493 11.493 0 0 0 2.304 3.504c.992.992 2.16 1.776 3.505 2.352 1.344.576 2.784.864 4.32.864 1.535 0 2.975-.288 4.32-.864a11.062 11.062 0 0 0 3.504-2.352 11.062 11.062 0 0 0 2.352-3.504c.575-1.344.864-2.784.864-4.32 0-1.536-.289-2.976-.865-4.32a11.062 11.062 0 0 0-2.352-3.504 10.682 10.682 0 0 0-3.503-2.4c-1.344-.576-2.784-.864-4.32-.864-1.537 0-2.977.288-4.32.864a10.682 10.682 0 0 0-3.504 2.4c-.96.992-1.729 2.16-2.305 3.504-.576 1.344-.864 2.784-.864 4.32ZM103.8 43.76c0-7.2-.976-14.08-2.928-20.64-1.92-6.592-4.8-12.944-8.64-19.056-.32-.544-.416-.976-.288-1.296.16-.352.368-.608.624-.768L94.584.752c2.464 3.776 4.528 7.44 6.192 10.992 1.696 3.52 3.056 7.04 4.08 10.56a64.045 64.045 0 0 1 2.256 10.56c.48 3.52.72 7.152.72 10.896 0 3.744-.24 7.376-.72 10.896-.448 3.52-1.2 7.04-2.256 10.56-1.024 3.488-2.384 6.992-4.08 10.512-1.664 3.552-3.728 7.216-6.192 10.992l-2.016-1.248c-.256-.16-.464-.416-.624-.768-.128-.32-.032-.752.288-1.296 3.84-6.112 6.72-12.448 8.64-19.008 1.952-6.592 2.928-13.472 2.928-20.64Zm24.75 0c0-7.2-.976-14.08-2.928-20.64-1.92-6.592-4.8-12.944-8.64-19.056-.32-.544-.416-.976-.288-1.296.16-.352.368-.608.624-.768l2.016-1.248c2.464 3.776 4.528 7.44 6.192 10.992 1.696 3.52 3.056 7.04 4.08 10.56a64.045 64.045 0 0 1 2.256 10.56c.48 3.52.72 7.152.72 10.896 0 3.744-.24 7.376-.72 10.896-.448 3.52-1.2 7.04-2.256 10.56-1.024 3.488-2.384 6.992-4.08 10.512-1.664 3.552-3.728 7.216-6.192 10.992l-2.016-1.248c-.256-.16-.464-.416-.624-.768-.128-.32-.032-.752.288-1.296 3.84-6.112 6.72-12.448 8.64-19.008 1.952-6.592 2.928-13.472 2.928-20.64Zm24.51 30.048c-.608 1.6-1.584 2.8-2.928 3.6-1.312.832-2.656 1.248-4.032 1.248h-5.616L168.18 6.992c.544-1.44 1.408-2.56 2.592-3.36 1.184-.8 2.544-1.2 4.08-1.2h5.664L153.06 73.808Zm78.689-34.8v5.232l-38.448 20.112V55.04c0-.704.16-1.344.48-1.92.352-.576.944-1.056 1.776-1.44l15.696-8.208c.8-.384 1.632-.72 2.496-1.008.864-.32 1.792-.592 2.784-.816-.992-.224-1.92-.48-2.784-.768a29.203 29.203 0 0 1-2.496-1.056l-15.696-8.256c-.832-.384-1.424-.864-1.776-1.44-.32-.576-.48-1.2-.48-1.872v-9.312l38.448 20.064Zm28.904-34.704c-1.376 0-2.64.24-3.792.72a8.55 8.55 0 0 0-2.928 2.064c-.8.896-1.44 1.984-1.92 3.264-.448 1.28-.672 2.704-.672 4.272 0 1.824.144 3.6.432 5.328a132.3 132.3 0 0 0 .96 5.136c.352 1.664.672 3.344.96 5.04.288 1.664.432 3.344.432 5.04 0 1.184-.208 2.272-.624 3.264a8.18 8.18 0 0 1-1.584 2.592 9.14 9.14 0 0 1-2.256 1.872 8.833 8.833 0 0 1-2.64 1.008 9.072 9.072 0 0 1 2.64 1.104 8.317 8.317 0 0 1 2.256 1.824 8.18 8.18 0 0 1 1.584 2.592c.416.992.624 2.08.624 3.264a30.34 30.34 0 0 1-.432 5.088 154.26 154.26 0 0 1-.96 5.04 132.3 132.3 0 0 0-.96 5.136 32.063 32.063 0 0 0-.432 5.28c0 1.568.224 2.992.672 4.272.48 1.28 1.12 2.368 1.92 3.264a8.55 8.55 0 0 0 2.928 2.064c1.152.48 2.416.72 3.792.72h1.584c.288 0 .56.096.815.288.257.192.385.464.385.816v2.016h-2.64c-2.112 0-4.016-.352-5.712-1.056-1.664-.672-3.072-1.632-4.224-2.88-1.152-1.216-2.032-2.656-2.64-4.32-.608-1.664-.912-3.472-.912-5.424 0-1.792.144-3.52.432-5.184.32-1.696.656-3.376 1.008-5.04.352-1.664.672-3.328.96-4.992.32-1.664.48-3.376.48-5.136 0-1.056-.176-2.016-.528-2.88a6.336 6.336 0 0 0-1.536-2.304 6.261 6.261 0 0 0-2.352-1.536c-.896-.352-1.904-.528-3.024-.528v-2.928c1.12 0 2.128-.176 3.024-.528.928-.352 1.712-.848 2.352-1.488a6.926 6.926 0 0 0 1.536-2.304c.352-.896.528-1.872.528-2.928 0-1.76-.16-3.472-.48-5.136a137.07 137.07 0 0 0-.96-4.992 275.626 275.626 0 0 1-1.008-4.992 31.202 31.202 0 0 1-.432-5.232c0-1.952.304-3.76.912-5.424.608-1.664 1.488-3.104 2.64-4.32 1.152-1.248 2.56-2.208 4.224-2.88 1.696-.704 3.6-1.056 5.712-1.056h2.64V3.2c0 .352-.128.624-.385.816a1.332 1.332 0 0 1-.815.288h-1.584Z"
              fill="#fff"
            />
          </svg>
          <div tw="relative flex flex-col flex-1 py-10">
            <div tw="flex leading-[1.1] text-[80px] max-w-[700px] font-bold tracking-tighter" />
          </div>
          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex items-center text-xl"
              style={{fontFamily: 'Inter', fontWeight: 'normal'}}
            >
              <div>https://nerdfish.be</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontRegular,
            weight: 400,
            style: 'normal',
          },
        ],
      },
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
