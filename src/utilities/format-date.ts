export const formatManufacturingDate = (isoString: string): string => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (error) {
      return 'Invalid Date';
    }
  };