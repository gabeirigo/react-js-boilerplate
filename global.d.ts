declare global {
  interface Window {
    SankhyaHub: {
      _applicationId: string,
      _device: string | null,
      _readyObservers: any[],
      _user: any,
      _validatedToken: boolean,
      ready: (callback: any) => void
    }
  }
}