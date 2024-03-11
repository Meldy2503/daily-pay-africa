export const configOptions = () => {
    if (typeof window === 'undefined') return true;
  
    if (!window.sessionStorage.getItem('admin')) return false;
  
    const accessToken = JSON.parse(
      window.sessionStorage.getItem('admin') as string
    ).token;
  
    if (!!accessToken) {
      return accessToken;
    }
  };
  
  