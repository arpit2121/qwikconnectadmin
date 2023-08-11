import React, {memo, useRef, useLayoutEffect} from 'react';
import usePrevious from '../../hooks/usePrevious'
import useResponsiveStyles from '../../utils/MediaQuery';

const SingleInputComponent = (props) => {
    const {focus, autoFocus, ...rest} = props;
    const inputRef = useRef(null);
    const responsive=useResponsiveStyles()
    const prevFocus = usePrevious(!!focus);
    useLayoutEffect(()=>{
        if(inputRef.current) {
            if(focus && autoFocus) {
                inputRef.current.focus();
            }
            if(focus && autoFocus && focus !== prevFocus) {
                inputRef.current.focus();
                inputRef.current.select();
            }
        }
    }, [autoFocus, focus, prevFocus]);
    
  return <input ref={inputRef} {...rest} style={{width:'1.5rem',fontSize:'1.75rem',fontWeight:700, padding:'0.6rem 1.25rem',textAlign:'center', borderRadius:'1.125rem', border:'1px solid var(--fields-stroke-focused, #605DEC)', backgroundColor:'var(--fields-form, #F7F7FD)'}}></input>
}

const SingleOtpInput = memo(SingleInputComponent)
export default SingleOtpInput;