export interface OnboardingState {
  step: number;
  videoCount: number | null;
  revenue: string;
  socialHandle: string;
  isQualified: boolean;
  isCompleted: boolean;
}

export enum VideoAspectRatio {
  LANDSCAPE = '16:9',
  PORTRAIT = '9:16'
}

export enum ImageSize {
  SIZE_1K = '1K',
  SIZE_2K = '2K',
  SIZE_4K = '4K'
}

export interface AIState {
  isLoading: boolean;
  result: string | null; // URL or text result
  error: string | null;
}
