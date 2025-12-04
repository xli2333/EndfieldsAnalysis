

export interface NavItem {
  id: number;
  label: string;
  subLabel: string;
}

export interface ChartDataPoint {
  label: string;
  value?: number;
  value2?: number; // For comparison (e.g., Competitor)
  value3?: number; // For comparison
  color?: string;
  x?: number; // For scatter
  y?: number; // For scatter
  group?: string;
  highlight?: string;
  // For diagrams
  details?: string; 
  iconName?: string; // Changed from icon (emoji) to iconName (lucide)
  // For Risk
  mitigation?: string;
  // For Interactive Cards
  expandedContent?: {
    title: string;
    description: string;
    bullets: string[];
    dataPoints?: { label: string; value: string }[];
  };
}

export interface ChartConfig {
  type: 'RADAR' | 'BAR_HORIZONTAL' | 'BAR_VERTICAL' | 'SCATTER' | 'FINANCIAL_TABLE' | 'RISK_MATRIX' | 'DIAGRAM' | 'CARDS_EXPANDABLE' | 'INDUSTRY_EVOLUTION' | 'PIE';
  data: ChartDataPoint[];
  labels?: string[]; // For Radar axes
  seriesNames?: string[]; // Legend
  yAxisLabel?: string;
  xAxisLabel?: string;
  highlight?: string;
  diagramType?: 'FLYWHEEL' | 'CORE_LOOP'; // Specific diagram style
}

export type LayoutType = 'SPLIT_LEFT' | 'SPLIT_RIGHT' | 'CENTER_TOP' | 'GRID_CARDS' | 'FULL_WIDTH' | 'VERTICAL_INVERTED';

export type PageType = 'COVER' | 'EXECUTIVE' | 'TEXT_SPLIT' | 'CHART' | 'VISUAL_focus' | 'FINANCIAL_TABLE' | 'RISK_MATRIX' | 'DIAGRAM';

export interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
}

export interface MediaItem {
  id: number;
  imageUrl: string;
  title: string;
  enTitle: string;
  category: string;
}

export interface PageData {
  id: number;
  type: PageType;
  section: string; // E.g., "第一部分：执行摘要"
  title: string; // Headline
  subTitle: string; // Context/Tagline
  layout?: LayoutType; // New layout property
  content?: {
    heading?: string;
    bullets?: string[]; // Key takeaways
    chart?: ChartConfig;
    visualAsset?: string; // URL for imagery
    speakerNotes?: string; // For the "presenter" mode feel
    items?: NewsItem[] | MediaItem[];
    // New field for deep dive data
    deepDive?: {
        title: string;
        text: string[];
        dataPoints?: {label: string, value: string}[];
    };
  };
}