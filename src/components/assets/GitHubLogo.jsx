export const GitHubLogo = ({w,h}) =>{

    const width = w || '24'
    const height = h || '22'

    return(
        <svg width={width} height={height} viewBox="0 0 24 22" fill="none" className="drop-shadow-xl">
            <path fill-rule="evenodd" clipRule="evenodd" d="M11.75 0C5.39625 0 0.25 5.04701 0.25 11.2782C0.25 16.2688 3.54187 20.4841 8.11312 21.9785C8.68812 22.0771 8.90375 21.7388 8.90375 21.4427C8.90375 21.1749 8.88938 20.2867 8.88938 19.3422C6 19.8638 5.2525 18.6514 5.0225 18.017C4.89313 17.6927 4.3325 16.6918 3.84375 16.4239C3.44125 16.2125 2.86625 15.6908 3.82938 15.6767C4.735 15.6626 5.38188 16.4944 5.5975 16.8328C6.6325 18.5386 8.28563 18.0593 8.94688 17.7632C9.0475 17.0301 9.34938 16.5367 9.68 16.2548C7.12125 15.9728 4.4475 15 4.4475 10.6861C4.4475 9.45962 4.89312 8.44458 5.62625 7.6551C5.51125 7.37314 5.10875 6.21712 5.74125 4.66637C5.74125 4.66637 6.70438 4.37032 8.90375 5.82239C9.82375 5.56863 10.8013 5.44175 11.7788 5.44175C12.7563 5.44175 13.7338 5.56863 14.6538 5.82239C16.8531 4.35622 17.8162 4.66637 17.8162 4.66637C18.4487 6.21712 18.0462 7.37314 17.9312 7.6551C18.6644 8.44458 19.11 9.44552 19.11 10.6861C19.11 15.0141 16.4219 15.9728 13.8631 16.2548C14.28 16.6072 14.6394 17.2839 14.6394 18.3412C14.6394 19.8497 14.625 21.0621 14.625 21.4427C14.625 21.7388 14.8406 22.0912 15.4156 21.9785C19.9581 20.4841 23.25 16.2548 23.25 11.2782C23.25 5.04701 18.1038 0 11.75 0Z" fill="url(#paint0_linear_206_6)" />
                <defs>
                    <linearGradient id="paint0_linear_206_6" x1="11.75" y1="-7.78924e-09" x2="12" y2="31" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
        </svg>
    )
}