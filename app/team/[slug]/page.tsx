import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTeamMember, teamMembers } from '@/lib/team';
import { TeamMemberClient } from './TeamMemberClient';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teamMembers.flatMap((member) => [
    { slug: member.slug },
    { slug: member.originalPath },
  ]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) return { title: 'Inspector not found | Golden Scope Inspections' };

  return {
    title: `${member.name} | Golden Scope Inspections`,
    description: `${member.name}, ${member.license}, Golden Scope home inspector serving the Greater Houston Area.`,
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) notFound();

  return <TeamMemberClient slug={slug} />;
}
