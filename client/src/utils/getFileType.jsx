
const getFileType = (fileData) => {
    const uint8Array = new Uint8Array(fileData);
  
    // Define file signatures and corresponding file types
    const signatures = {
        '89504E47': 'image/png',
        '47494638': 'image/gif',
        'FFD8FFE0': 'image/jpeg',
        'FFD8FFE1': 'image/jpeg',
        '25504446': 'application/pdf',
        '424D': 'image/bmp',
        '52494646': 'image/webp',
        '49492A00': 'image/tiff (Little-endian)',
        '4D4D002A': 'image/tiff (Big-endian)',
        '00000100': 'image/ico (Icon)',
      };
  
    // Extract the first 4 bytes (8 hexadecimal characters) from the data
    const signature = uint8Array.slice(0, 4).reduce((acc, byte) => acc + byte.toString(16).toUpperCase(), '');
  
    // Get the corresponding file type from the signatures object
    return signatures[signature] || 'unknown';
  }


  export default getFileType